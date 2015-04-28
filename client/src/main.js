require.config({
	paths: {
		'react': '/bower_components/react/react',
		'jquery': '/bower_components/jquery/dist/jquery'
	}
});

require(['react', 'AddressBook'], function(React, AddressBook) {
	React.render(
		<AddressBook />,
		document.getElementById('app-address-book')
		);
});