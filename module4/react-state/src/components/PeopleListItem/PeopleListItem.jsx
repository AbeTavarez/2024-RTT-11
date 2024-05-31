import PropTypes from 'prop-types';

function PeopleListItem({person}) {
    return (
        <div>
            <div>Name: {person.name}</div>
            <div>Profession: {person.profession}</div>
            <div>Accomplishment: {person.accomplishment}</div>
            <hr />
        </div>
    )
}




PeopleListItem.propTypes = {
    person: PropTypes.object
}

export default PeopleListItem;