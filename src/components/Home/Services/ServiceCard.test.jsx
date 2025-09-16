import renderer from 'react-test-renderer'
import ServiceCard from './ServiceCard.jsx'

test('renders without crashing', () => {
    const component = renderer.create(<ServiceCard source="testSource" title="testTitle" buttonText="testButton" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})