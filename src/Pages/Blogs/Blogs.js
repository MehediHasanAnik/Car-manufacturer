import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-4'>
            <div className="blogs border border-2 p-4">
                <div className="row">
                    <div className="col-md-6">
                        <h3> Q.1 How will you improve the performance of a React Application?</h3>
                        <p>React pre-optimization techniques Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems. Let’s start by reviewing how the React UI updates.Understanding how React updates its UI When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render. It then only updates the changed element in the actual DOM. This process is called diffing. React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate. </p>

                    </div>
                    <div className="col-md-6">
                        <h3>
                            Q.2 What are the different ways to manage a state in a React application?
                        </h3>
                        <p> The Four Kinds of React State to Manage
                            When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                            There are four main types of state you need to properly manage in your React apps:
                            <li>Local state</li>
                            <li>  Global state</li>
                            <li>Server state</li>
                            <li> URL state</li></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3> Q.3 How does prototypical inheritance work?</h3>
                        <p>Inheritance allows an object to use the properties and methods of another object without duplicating the code.
                            JavaScript uses the prototypal inheritance.It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>
                            Q.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        </h3>
                        <p>I have a product of array. Now I put an array of product filter methods. Then  filter method does the loop of the product. I would use the includes a method in "name". Then I have a return a product where the name matched.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>6 What is a unit test? Why should write unit tests?</h3>
                        <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;