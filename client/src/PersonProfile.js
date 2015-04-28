define(['react'], function (React) {
	return React.createClass({
		render: function() {
			var person = this.props.person;
			if (!person) {
				return (
					<div className="app-person-profile-container"></div>
					);
			}
			var educationNodes = person.education
			.map(function(education, index) {
				var endYear = education.endYear || 'present';
				return (
					<div key={index} className="app-history-item">
                        <div className="app-history-item-dates">
                            {education.startYear}-{endYear}
                        </div>
                        <div className="app-history-item-body">
                            <div className="app-history-item-title">{education.institution}</div>
                            {education.degree}
                        </div>
                    </div>
					);
			});
			var experienceNodes = person.workExperience
			.map(function(experience, index) {
				var endYear = experience.endYear || 'present';
				return (
					<div key={index} className="app-history-item">
                        <div className="app-history-item-dates">
                            {experience.startYear}-{endYear}
                        </div>
                        <div className="app-history-item-body">
                            <div className="app-history-item-title">{experience.institution}</div>
                            {experience.title}
                        </div>
                    </div>
					);
			});
			return (
		        <div className="app-person-profile-container">
		            <div className="app-person-profile docs-highlight docs-blue" data-intro="Person Profile" data-position="bottom">
		                <div className="app-person-profile-header">
		                    <img className="app-person-profile-photo" src="avatar.png" />

		                    <h2>{person.name}</h2>
		                    <div className="app-person-profile-department">
		                        {person.department}
		                    </div>
		                    <div className="app-person-profile-phone-number">
		                        {person.phone}
		                    </div>
		                    <div className="app-person-profile-email">
		                        <a href="mailto:{person.email}">{person.email}</a>
		                    </div>
		                </div>
		                <div className="app-section">
		                    <div className="app-section-header">
		                        <h3>Education</h3>
		                    </div>
		                    <div className="app-section-body">
		                        {educationNodes}
		                    </div>
		                </div>

		                <div className="app-section">
		                    <div className="app-section-header">
		                        <h3>Experience</h3>
		                    </div>
		                    <div className="app-section-body">
		                        {experienceNodes}
		                    </div>
		                </div>

		            </div>
		        </div>
				);
		}
	})
});