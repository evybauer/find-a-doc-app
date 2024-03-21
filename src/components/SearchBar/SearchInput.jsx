import { Select } from 'antd'

const SearchInput = ({ placeholder, icon, options, onChange }) => {

    const handleChange = (value) => {
        onChange(value)
      }

    const onSearch = (value) => {
        console.log('search:', value)
    }

    const filterOption = (input, option) =>
        option.searchValue ? option.searchValue.toLowerCase().includes(input.toLowerCase()) : false

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            {icon}
            <Select
                showSearch
                allowClear
                placeholder={placeholder}
                optionFilterProp="children"
                onChange={handleChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={options}
                suffixIcon={null}
                width='100%'
            />
        </div>
    )
}

export default SearchInput