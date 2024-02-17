import PropTypes from 'prop-types' 

function Student(prop){
    return(
        <div>
            <p>Name: {prop.name}</p>
            <p>Age: {prop.age}</p>
            <p>Student: {prop.isStudent ? 'Yes':'No'}</p>
        </div>
    )
}
Student.prototype = {
    age: PropTypes.number,
    name: PropTypes.string
}

Student.defaultProps = {
    age: 40,
    name: "Guest"
}
export default Student