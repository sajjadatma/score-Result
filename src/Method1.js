import React,{ useState }from 'react'

export default function Method1() {
    const [theory, setTheory] = useState(0);
    const [partical, setPartical] = useState(0);
    const [result, setResult] = useState(0);
    const theoryOnChange = (e) => {
      setTheory(e.target.value);
    };
    const particalOnChange = (e) => {
      setPartical(e.target.value);
    };
    const calcFistMethod = () => {
      const square = partical * 3
      const sum = +theory + square ;
      console.log(theory); 
      const devide = sum / 4
      
      const score = devide / 5;
      setResult(score);
    };
    return (
      <div className='middleElements'>
        <div className='card bg-light'>
          <div className='card-body'>
          <h5 className="title">محاسبه نمره بر اساس  نمره عملی و نمره تئوری</h5>

              <div className='row'>
                <div className='col'>
                  <input
                    onChange={theoryOnChange}
                    type='number'
                    className='form-control'
                    placeholder='نمره نظری'
                  />
                </div>
                <div className='col'>
                  <input
                    onChange={particalOnChange}
                    type='number'
                    className='form-control'
                    placeholder='نمره عملی'
                  />
                </div>
                <div className='col'>
                  <button onClick={calcFistMethod} className='btn btn-primary'>
                    محاسبه
                  </button>
                </div>
              </div>
              <h5 className='result'>نمره نهایی: {result}</h5>
          </div>
        </div>
      </div>
    )
}
