import * as React from 'react'
import PropTypes from 'prop-types'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const BasicSelect = ({ filters, selectedFilter, setFilter }) => {

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-label">Ordenar por</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedFilter}
          label="Ordenar por"
          onChange={handleChange}
        >
          {
            filters.map( filter => (
              <MenuItem key={filter.id} value={filter}>{ filter.detail }</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  )
}

BasicSelect.propTypes = {
  filters: PropTypes.array.isRequired, 
  selectedFilter: PropTypes.object.isRequired, 
  setFilter: PropTypes.func.isRequired
}

export default BasicSelect