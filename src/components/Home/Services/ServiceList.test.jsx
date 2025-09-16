// ServicesList.test.jsx
import renderer from 'react-test-renderer'
import ServicesList from './ServicesList.jsx'

// Mock data
const services = [
    { id: '1', source: 'testSource1', title: 'testTitle1', buttonText: 'testButton1' },
    { id: '2', source: 'testSource2', title: 'testTitle2', buttonText: 'testButton2' }
]

test('renders without crashing', () => {
    const component = renderer.create(<ServicesList services={services} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})