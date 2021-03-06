import { create, tsx } from '@dojo/framework/core/vdom';
import Avatar from '@dojo/widgets/avatar';
import Icon from '@dojo/widgets/icon';
import Example from '../../Example';

const factory = create();

export default factory(function Basic() {
	return (
		<Example>
			<div styles={{ width: '400px', display: 'flex', justifyContent: 'space-around' }}>
				<Avatar variant="circle">
					<Icon type="secureIcon" />
				</Avatar>
				<Avatar variant="rounded">
					<Icon type="secureIcon" />
				</Avatar>
				<Avatar variant="square">
					<Icon type="secureIcon" />
				</Avatar>
			</div>
		</Example>
	);
});
