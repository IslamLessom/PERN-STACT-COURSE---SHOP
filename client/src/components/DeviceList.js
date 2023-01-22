import React, { useContext } from 'react'
import { Context } from '../index'

//mobx
import { observer } from 'mobx-react-lite'

//bootstrap
import { Form } from 'react-bootstrap'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const { device } = useContext(Context)
    return (
        <Form className="d-flex mt-3" >
            {device.devices.map(device =>
                <DeviceItem  key={device.id} device={device} />
            )}
        </Form>
    )
})

export default DeviceList
