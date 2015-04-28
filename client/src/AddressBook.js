define(['react', 'jquery', 'Directory', 'PersonProfile'], function (React, jQuery, Directory, PersonProfile) {
	var AddressBook = React.createClass({
		loadPeopleFromServer: function() {
			jQuery.ajax({
				url: this.props.url,
				dataType: 'json',
				success: function(data) {
					this.setState({
						selectedPerson: data.people[0],
						people: data.people
					});
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});
		},
		getInitialState: function() {
			return {
				selectedPerson: null,
				people: []
			};
		},
		componentDidMount: function() {
			this.loadPeopleFromServer();
		},
		render: function() {
			return (
				<div className="app-address-book">
			        <Directory people={this.state.people} />
			        <PersonProfile person={this.state.selectedPerson} />
			    </div>
				);
		}
	});
	return AddressBook;
});