define(['react', 'jquery', 'Directory', 'PersonProfile'], function (React, jQuery, Directory, PersonProfile) {
	var AddressBook = React.createClass({
		loadPersonsFromServer: function() {
			jQuery.ajax({
				url: this.props.url,
				dataType: 'json',
				success: function(data) {
					console.log(data.people);
					this.setState({data: data.people});
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});
		},
		getInitialState: function() {
			return {
				selectedPerson: "selectedPerson",
				data: []
			};
		},
		componentDidMount: function() {
			this.loadPersonsFromServer();
		},
		render: function() {
			return (
				<div className="app-address-book">
			        <Directory />
			        <PersonProfile />
			    </div>
				);
		}
	});
	return AddressBook;
});