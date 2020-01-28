import React, { Component } from 'react'
import EquipmentItem from './EquipmentItem/EquipmentItem'

class Equipment extends Component {
    render() {
        return (
            this.props.equipment.map ((equipmentItem, index) => {
                return <EquipmentItem
                    name={equipmentItem.name}
                    type={equipmentItem.type}
                    click={() => this.props.clicked(index)}
                    key={equipmentItem.id}
                />
            })
        )
    }
}

export default Equipment;