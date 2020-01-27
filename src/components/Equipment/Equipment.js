import React from 'react'
import EquipmentItem from './EquipmentItem/EquipmentItem'

const equipment = (props) => props.equipment.map ((equipmentItem, index) => {
        return <EquipmentItem
            name={equipmentItem.name}
            type={equipmentItem.type}
            click={() => props.clicked(index)}
            key={equipmentItem.id}
        />
    });

export default equipment;