import {Button, Modal} from "antd";
import {FC} from "react";

const SelectModal:FC<{open:boolean,onClick:(val:any)=>void}> = ({open,onClick}) => {
    return <Modal open={open}>
        nihao
        <Button onClick={()=>{
            onClick({data:{name:'nihao'}})
        }}></Button>
    </Modal>
}

export default SelectModal