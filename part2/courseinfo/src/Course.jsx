import React from 'react'


const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Part = ({ part, exercises }) => {
    return (
        <p>
            {part} {exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part =>
                <Part
                    key={part.id}
                    part={part.name}
                    exercises={part.exercises}
                />
            )}
        </div>
    )
}

const Total = ({ course }) => {
    const total = course.parts.map(part => part.exercises).reduce((sum, num) => sum + num, 0)
    return (
        <p>
            <strong>Number of exercises {total}</strong>
        </p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course