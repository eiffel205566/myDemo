import { useContext, useEffect } from 'react'
import { AppContext } from 'src/context/AppContext'

import { useRef } from 'react'
const Selection = (props) => {
  const myInput = document.getElementById('myInput')
  const inputRef = useRef(myInput)
  const [selection, setSelection, listData, listOfObj] = useContext(AppContext)

  const onChange = (e) => {
    let matchedListData = listData.filter((item) =>
      item.includes(e.target.value)
    )
    // let matchedListOfObj = Object.entries(listOfObj).filter(([k, _]) => {
    //   if (k.includes(e.target.value)) {
    //     return k
    //   }
    // })
    setSelection((state) => {
      return {
        ...state,
        selected: matchedListData,
      }
    })
  }

  useEffect(() => {
    if (Object.is(inputRef.current.value, '')) {
      setSelection((state) => {
        return {
          ...state,
          selected: null,
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
        <div className="selectionResultTopContainer border flex-grow">
          {selection.selected &&
            selection.selected.map((item, index) => (
              <div className="hover:bg-green-100" key={index}>
                {item}
              </div>
            ))}
        </div>
        <div className="selectionResultSecondLayer border flex-grow"></div>
      </div>
    </div>
  )
}

export default Selection
