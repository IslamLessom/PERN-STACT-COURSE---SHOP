import React, { useContext } from 'react'
import { Context } from '../index'

//mobx
import { observer } from 'mobx-react-lite'

//bootstrap
import ListGroup from 'react-bootstrap/ListGroup'

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup as="ul">
            {device.types.map(type =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar
