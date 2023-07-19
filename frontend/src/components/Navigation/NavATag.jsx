import React from 'react'

function NavATag ({logo,text,cName,enter}) {
  return (
    <li className={cName}>
        <a>
            <span onMouseEnter={enter}
                 >
                {logo}
            </span>
            <b>
                <p>{text}</p>
            </b>
        </a>
    </li>
  )
}

export default NavATag