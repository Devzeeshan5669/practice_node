import React, { ReactElement, useState } from 'react';

type MenuItem = {
    title: string;
    subItems?: Array<string>;
};

type MenuConfig = Array<MenuItem>;

function Solution({ menuConfig }: { menuConfig: MenuConfig }): ReactElement {
    let [expandedArray, setExpandedArray] = useState([])

    const expand = (value) => {
        if (expandedArray.includes(value)) {
            let index = expandedArray.findIndex(item => item === value)
            if (index > -1) {
                expandedArray.splice(index, 1)
            }
        } else {
            expandedArray.push(value)
        }

        setExpandedArray([...expandedArray])
    }

    return <div className="menu-wrapper">
        {menuConfig &&

            menuConfig.map((item, index) => {

                return <div>
                    <p  >{item.title}</p>

                    {item.subItems ?
                        <div>
                            <button onClick={() => { expand(item.title) }} data-test-id={`button-${item.title.toLowerCase()}`}>{expandedArray.includes(item.title) ? "Hide" : "Expand"}
                            </button>
                            <ui data-test-id={`ui-${item.title.toLowerCase()}`} style={{ display: expandedArray.includes(item.title) ? "block" : "none" }} >
                                {item.subItems.map(submenuItem => {
                                    return <li data-test-id={`li-${item.title.toLowerCase()}-${submenuItem.toLowerCase()}`}>{submenuItem}</li>
                                })}
                            </ui>
                        </div> : ""}
                </div>
            })

        }



    </div>;
}

export default Solution;