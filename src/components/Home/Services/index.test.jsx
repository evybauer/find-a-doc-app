import renderer from 'react-test-renderer'
import Services from './index.jsx'

test('renders without crashing', () => {
    const component = renderer.create(<Services />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})