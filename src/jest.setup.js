import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import 'jest-styled-components';

const mockAggregatorCreate = (mockAggregator) => {
	const fs = require('fs');
	const path = require('path');

	const aggregatedModules = {};

	fs
		.readdirSync(path.resolve(`./src/${ mockAggregator }`))
		.filter(filename => path.extname(filename) === '')
		.forEach((name) => {
			Object.defineProperty(aggregatedModules, name, {
				get() {
					return require(path.resolve(`./src/${ mockAggregator }`, name)).default;
				}
			});
		});

	return aggregatedModules;
};

// We can't read this dynamically as some aggregator have a slightly different structure,
// like `utils`, `layouts` or `ducks`
const aggregators = [ 'components', 'composables', 'elements', 'pages', 'store' ];

aggregators.forEach((mockAggregator) => {
	jest.mock(mockAggregator, () => mockAggregatorCreate(mockAggregator), { virtual: true });
});

Enzyme.configure({ adapter: new Adapter() });
