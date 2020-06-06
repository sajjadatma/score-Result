import React,{ useState }from 'react'

export default function Method2() {
    const [theory, setTheory] = useState(0);
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);
    const theoryOnChange = (e) => {
      setTheory(e.target.value);
    };
    const valueOnChange = (e) => {
        setValue(e.target.value);
    };
    const calcFistMethod = () => {
        const square1 = value * 5;
        
        const square2 = square1 * 4 ;
        console.log(square2);
      const Subtraction = square2 -  +theory
      
      const score = Subtraction / 3;
      setResult(score);
    };
    return (
        <div className='middleElements'>
        <div className='card bg-light'>
          <div className='card-body'>
                        <h5 className="title">محاسبه نمره بر اساس  نمره دلخواه و نمره تئوری</h5>
                    <div className='row'>
                    <div className='col'>
                  <input
                    onChange={valueOnChange}
                    type='number'
                    className='form-control'
                    placeholder='نمره دلخواه'
                  />
                </div>
                <div className='col'>
                  <input
                    onChange={theoryOnChange}
                    type='number'
                    className='form-control'
                    placeholder='نمره نظری'
                  />
                </div>
            
                <div className='col'>
                  <button onClick={calcFistMethod} className='btn btn-primary'>
                    محاسبه عملی
                  </button>
                </div>
              </div>
             <h5 className='result'>نمره عملی: {result}</h5>
          </div>
        </div>
      </div>
    )
}
