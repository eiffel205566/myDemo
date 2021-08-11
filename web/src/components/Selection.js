import { useContext, useEffect } from 'react'
import { AppContext } from 'src/context/AppContext'
import { FcNext, FcPrevious } from 'react-icons/fc'

import { useRef } from 'react'
const Selection = (props) => {
  const myInput = document.getElementById('myInput')
  const inputRef = useRef(myInput)
  const [selection, setSelection, listData, listOfObj] = useContext(AppContext)

  //pull out all keys in listOfObj
  const objKeys = listOfObj.map((item) => {
    return Object.keys(item)[0]
  })

  //convert listOfObj to a plain obj so we can easily use key to access data
  const plainObj = listOfObj.reduce((prev, cur) => {
    return { ...prev, ...cur }
  }, {})

  //handle new input in inputbox
  const onChange = (e) => {
    const matchedListData = listData.filter((item) =>
      item.includes(e.target.value)
    )

    //keys that contain key phrase in input box
    const matchedKeys = objKeys.filter((item) => item.includes(e.target.value))

    setSelection((state) => {
      return {
        ...state,
        selected: [...matchedListData, ...matchedKeys],
      }
    })
  }

  //handle click to show detail items
  const onHandleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const matchedKeyName = e.currentTarget.innerHTML
    setSelection((state) => {
      return {
        ...state,
        extendedKey:
          matchedKeyName === state.extendedKey ? null : matchedKeyName,
      }
    })
  }

  //to make sure when input box is empty, selection state is set to null
  useEffect(() => {
    if (Object.is(inputRef.current.value, '')) {
      setSelection((state) => {
        return {
          ...state,
          selected: null,
          extendedKey: null,
          detailItems: null,
        }
      })
    }
  }, [inputRef.current?.value])

  return (
    <div className="selection w-96 text-center">
      <div className="w-full">{`Selection ${props.selectionIndex}`}</div>
      <input
        id={'myInput'}
        ref={inputRef}
        onChange={onChange}
        placeholder="Type Something Here..."
        className="border w-full"
        type="text"
      />
      <div className="selectionResult w-full min-h-full overflow-y-scroll bg-gray-300 flex">
        <div className="selectionResultLeftContainer border flex-grow select-none">
          {selection.selected &&
            selection.selected.map((item, index) => (
              <div
                className="hover:bg-green-100 flex justify-center h-6"
                key={index}
              >
                <span
                  onClick={objKeys.includes(item) ? onHandleClick : () => {}}
                  className={`h-full ${
                    objKeys.includes(item) ? 'cursor-pointer' : ''
                  }`}
                >
                  {item}
                </span>
                {/* if the matched phrase comes from  listOfObj, then add an arrow*/}
                {objKeys.includes(item) && (
                  <span className="h-full flex flex-col justify-center">
                    {selection.extendedKey === item ? (
                      <FcPrevious className="h-4 w-4" />
                    ) : (
                      <FcNext className="h-4 w-4" />
                    )}
                  </span>
                )}
              </div>
            ))}
        </div>
        <div className="selectionResultRightContainer border flex-grow">
          {selection.extendedKey &&
            plainObj[selection.extendedKey].map((item, index) => (
              <div key={index}>{item}</div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Selection
