Notes:

#1: Usage of ContextAPI
intialize a Context Object on Application level, wrap it around and pass down state and setState, call useContext at the component level to grab state/setState


#2: 2 types of data defined in "data" folder under web/src

const listData = ['Door', 'Window', 'Chair', 'Desk', 'Shade']
const listOfObj = [
  { Fruit: ['Apple', 'Banana', 'Clementine', 'Mango'] },
  { Vegi: ['Lettuce', 'Pepper', 'Carrot', 'Potato'] },
  { Meat: ['Pork', 'Beef', 'Lamb', 'Fish'] },
]

#3: typing in the input box will try to match either an item in listData or key in listOfObj, if matched key from listOfObj, then display an arrow to indicate there is more data (the value of each item in listOfObj). Click/toggle on the arrow will display the "value" data in the right section
