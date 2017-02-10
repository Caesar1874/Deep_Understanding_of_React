import React, {Component} from "react"


// 父组件向子组件通信
function ListItem({value}) {
    return (
        <li>
            <span>{value}</span>
        </li>
    );
}

function List2Child({list, title}) {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {
                    list.map((entry, index) => {
                        return (
                            <ListItem key={`list-${index}`} value={entry.text}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export {
    List2Child
}