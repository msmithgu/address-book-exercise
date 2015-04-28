define(['react'], function (React) {
	return React.createClass({
		render: function() {
			return (
		        <div className="app-person-profile-container">
		            <div className="app-person-profile docs-highlight docs-blue" data-intro="Person Profile" data-position="bottom">
		                <div className="app-person-profile-header">
		                    <img className="app-person-profile-photo" src="avatar.png" />

		                    <h2>Adam Wright</h2>
		                    <div className="app-person-profile-department">
		                        Strategic Sales
		                    </div>
		                    <div className="app-person-profile-phone-number">
		                        919-555-5555
		                    </div>
		                    <div className="app-person-profile-phone-number">
		                        <a href="mailto:adam.wright@mycompany.com">adam.wright@mycompany.com</a>
		                    </div>
		                </div>
		                <div className="app-section">
		                    <div className="app-section-header">
		                        <h3>Education</h3>
		                    </div>
		                    <div className="app-section-body">
		                        <div className="app-history-item">
		                            <div className="app-history-item-dates">
		                                2004-2005
		                            </div>
		                            <div className="app-history-item-body">
		                                <div className="app-history-item-title">NC State University</div>
		                                Master's, Computer Science
		                            </div>
		                        </div>
		                        <div className="app-history-item">
		                            <div className="app-history-item-dates">
		                                2001-2004
		                            </div>
		                            <div className="app-history-item-body">
		                                <div className="app-history-item-title">NC State University</div>
		                                Bachelor's, Computer Science
		                            </div>
		                        </div>
		                    </div>
		                </div>

		                <div className="app-section">
		                    <div className="app-section-header">
		                        <h3>Experience</h3>
		                    </div>
		                    <div className="app-section-body">
		                        <div className="app-history-item">
		                            <div className="app-history-item-dates">
		                                2001-Present
		                            </div>
		                            <div className="app-history-item-body">
		                                <div className="app-history-item-title">Megacorp</div>
		                                Software Developer
		                            </div>
		                        </div>
		                        <div className="app-history-item">
		                            <div className="app-history-item-dates">
		                                1980-2001
		                            </div>
		                            <div className="app-history-item-body">
		                                <div className="app-history-item-title">Umbrella Corp</div>
		                                Software Developer
		                            </div>
		                        </div>
		                    </div>
		                </div>

		            </div>
		        </div>
				);
		}
	})
});