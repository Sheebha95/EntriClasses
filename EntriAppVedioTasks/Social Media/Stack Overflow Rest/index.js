const express = require("express")
const app = express()


const questions = [
    {
        question : "how to install python",
        slug : "how-to-install-python",
        votes : 3,
        views : 10,
        tags : "Python, pip, query"

    },

    {
        question : "how to install Java",
        slug : "how-to-install-Java",
        votes : 3,
        views : 10,
        tags : "Java, pip, query"

    },
    {
        question : "how to install .Net",
        slug : "how-to-install-.Net",
        votes : 3,
        views : 10,
        tags : ".Net, pip, query"

    }
]

const users = [
    {
        name:"VB",
        followers:100,
        location:"Hyderabad"
    },
    {
        name:"SB",
        followers:200,
        location:"Chennai"
    },
    {
        name:"PB",
        followers:300,
        location:"Hyderabad"
    }
]

const tags = [
    {
        name:"javascript",
        desc:"this is the description of tags",
        noofquestions:30
    },
    {
        name:"C++",
        desc:"this is the description of tags",
        noofquestions:50
    },
    {
        name:"python",
        desc:"this is the description of tags",
        noofquestions:40
    }
]

const companies = [
    {
        name:"Wipro",
        desc:"This is the wipro company",
        location:"Hyderabad",
        tags:"#wipro, #wiprocrcle"
    },
    {
        name:"Infosis",
        desc:"This is the infosis company",
        location:"Chennai",
        tags:"#Infosis, #Info"
    }
]

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/questions", (req, res) => {
    res.send(questions)
})

app.get("/questions/:slug", (req, res) => {
    console.log(req.params.slug)
    const slug = req.params.slug
    questions.map(obj =>{
        if(obj.slug === slug){
            res.send(obj)
        }
    })
    res.send("question not found")
})

app.get("/users", (req, res) => {
    res.send(users)  
})

app.get("/tags", (req, res) => {
    res.send(tags)  
})

app.get("/jobs/companies", (req, res) => {
    res.send(companies)  
})

app.listen(1234, () => {
    console.log("Listening.....")
})