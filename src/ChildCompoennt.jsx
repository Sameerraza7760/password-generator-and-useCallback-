import React,{memo} from 'react'

function ChildCompoennt(childCounter) {
    console.log("childCompoennt");
  return (
    <div>ChildCompoennt</div>
  )
}

export default memo(ChildCompoennt)

// notes  when the parient component called so the child compoennt rendered thats why we used callmemo and useCallback


