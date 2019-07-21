const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
     let result = record.find(record => {
       if (record.result === "W") {
         return record.year;
       } else {
         return undefined;
       }
     })
     return result.year;
   }
