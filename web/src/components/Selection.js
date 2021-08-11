import { useContext, useEffect } from 'react'
import { AppContext } from 'src/context/AppContext'
import { FcNext } from 'react-icons/fc'

import { useRef } from 'react'
const Selection = (props) => {
  const myInput = document.getElementById('myInput')
  const inputRef = useRef(myInput)
  const [selection, setSelection, listData, listOfObj] = useContext(AppContext)

  //pull out all keys in listOfObj
  let objKeys = listOfObj.map((item) => {
    return Object.keys(item)[0]
  })

  //handle new input in inputbox
  const onChange = (e) => {
    let matchedListData = listData.filter((item) =>
      item.includes(e.target.value)
    )

    //keys that contain key phrase in input box
    let matchedKeys = objKeys.filter((item) => item.includes(e.target.value))

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
    console.log(e.currentTarget.innerHTML)
    setSelection((state) => {
      return {
        ...state,
        extendedKey: 1,
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
                  className="h-full cursor-pointer"
                >
                  {item}
                </span>
                {/* if the matched phrase comes from  listOfObj, then add an arrow*/}
                {objKeys.includes(item) && (
                  <span className="h-full flex flex-col justify-center">
                    <FcNext className="h-4 w-4" />
                  </span>
                )}
              </div>
            ))}
        </div>
        <div className="selectionResultRightContainer border flex-grow"></div>
      </div>
    </div>
  )
}

export default Selection
