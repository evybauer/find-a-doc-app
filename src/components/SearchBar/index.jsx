import SearchInput from "./SearchInput"
import { Button, Form } from "antd"

import { insuranceSearchArray } from "./insuranceSearchList"
import { locationSearchArray } from "./locationSearchList"
import { medicalConditionsArray } from "./medicalConditionsList"

const searchConfigs = [
  {
    name: "condition",
    placeholder: "Condition, procedure, doctor...",
    icon: "🔍",
    options: medicalConditionsArray,
  },
  {
    name: "location",
    placeholder: "City, state, or zip code",
    icon: "📍",
    options: locationSearchArray,
  },
  {
    name: "insurance",
    placeholder: "Choose insurance",
    icon: "🪪",
    options: insuranceSearchArray,
  },
]

const SearchBar = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      className="search-bar-form"
    >
      {searchConfigs.map((config, index) => (
        <div key={index} className="search-bar-input">
          <Form.Item name={config.name} style={{ margin: 0, padding: 0, flexGrow: 1 }}>
            <SearchInput placeholder={config.placeholder} icon={config.icon} options={config.options} onChange={value => form.setFieldsValue({ [config.name]: value })}/>
          </Form.Item>
          {index < searchConfigs.length - 1 && (
            <>
              <div className="divider-vertical" />
              <div className="divider-horizontal" />
            </>
          )}
        </div>
      ))}
      <Form.Item style={{ margin: 0, padding: 0 }}>
        <Button type="primary" htmlType="submit" className="search-bar-button">
          Find Doctors
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SearchBar