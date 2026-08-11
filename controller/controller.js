const conversion = require('../model/convert')
const tempratureConversition = require('../model/temperature-convert')
exports.getLength = (req,res,next)=>{
    res.render('home',{
        units : ['millimeter', 'centimeter', 'meter', 'kilometer', 'inch', 'foot', 'yard', 'mile'],
        path : 'length'
    })

}

exports.getWeight = (req,res,next)=>{
    res.render('home',{
        units : ['milligram', 'gram', 'kilogram', 'ounce', 'pound'],
        path : 'weight'
    })

}

exports.getTemperature = (req,res,next)=>{
    res.render('home',{
        units : ['Celsius', 'Fahrenheit', 'Kelvin'],
        path : 'temprature'
    })

}
exports.get404 = (req,res,next)=>{
    res.status(404).render('404',{
        path :'Error'
    });

}

exports.postLength= (req,res,next)=>{
    const value = req.body.value ;
    const from = req.body.from
    const to = req.body.to;
    const result = conversion.convertLength(value,from,to)
    console.log(req.body);
    res.render('result',{
        from : from ,
        to : to ,
        value : value,
        result:result ,
        path : 'Result'
    });
}

exports.postWeight= (req,res,next)=>{
    const value = req.body.value ;
    const from = req.body.from
    const to = req.body.to;
    const result = conversion.convertWeight(value,from,to)
    console.log(req.body);
    res.render('result',{
        from : from ,
        to : to ,
        value : value,
        result:result ,
        path : 'Result'
    });
}

exports.postTemperature= (req,res,next)=>{
    const value = req.body.value ;
    const from = req.body.from
    const to = req.body.to;
    const result = tempratureConversition.convertTemperature(value,from,to)
    console.log(req.body);
    res.render('result',{
        from : from ,
        to : to ,
        value : value,
        result:result ,
        path : 'Result'
    });
}

