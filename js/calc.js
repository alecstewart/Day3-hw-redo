$(document).ready(function() {
          var currentCalcField = $('#calcNum1')
            currentTotal = 0
            currentOperator = '+'

            $('#calcNum1, #calcNum2').on('focus', function() {
                currentCalcField = $(this)
            })


            $(document).ready(function() {
                $('#calcBtn').on('click', function() {
                    var calcNum1 = Number($('#calcNum1').val()),
                        calcNum2 = Number($('#calcNum2').val()),
                        calcAnswer = 0

                    //console.log(calcNum1 + calcNum2)
                    if (currentOperator === '+') {
                        currentTotal = currentTotal + calcNum1
                    } else if (currentOperator === '-') {
                        currentTotal = currentTotal - calcNum1
                    }
                    calcAnswer = calcNum1 + calcNum2

                    $('#calcAnswerOutput').html(calcAnswer)

                })

                $('#calcBtn0').on('click', function() {
                    var calcBtnValue = 0,
                        calcNum1 = $('#calcNum1')

                    calcNum1.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn1').on('click', function() {
                    var calcBtnValue = 1,
                        calcNum1 = $('#calcNum1')

                    currentCalcField.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn2').on('click', function() {
                    var calcBtnValue = 2,
                        calcNum1 = $('#calcNum1')

                    currentCalcField.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn3').on('click', function() {
                    var calcBtnValue = 3,
                        calcNum1 = $('#calcNum1')

                    currentCalcField.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn4').on('click', function() {
                    var calcBtnValue = 4,
                        calcNum1 = $('#calcNum1')

                    currentCalcField.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn5').on('click', function() {
                    var calcBtnValue = 5,
                        calcNum1 = $('#calcNum1')

                    currentCalcField.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn6').on('click', function() {
                    var calcBtnValue = 6,
                        calcNum1 = $('#calcNum1')

                    currentCalcField.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn7').on('click', function() {
                    var calcBtnValue = 7,
                        calcNum1 = $('#calcNum1')

                    currentCalcField.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn8').on('click', function() {
                    var calcBtnValue = 8,
                        calcNum1 = $('#calcNum1')

                    currentCalcField.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn9').on('click', function() {
                    var calcBtnValue = 9,
                        calcNum1 = $('#calcNum1')

                    currentCalcField.val(calcNum1.val() + calcBtnValue)

                })

                $('#calcBtn+').on('click', function() {
                    var calcNum1 = $('#calcNum1')
                    currentOperator = '+'
                    currentTotal = currentTotal + Number(calcNum1.val())

                    calcNum1.val("")

                })

                $('#calcBtn-').on('click', function() {
                    var calcNum1 = $('#calcNum1')
                    currentOperator = '-'
                    currentTotal = currentTotal - Number(calcNum1.val())

                    calcNum1.val("")

                })

                $('#calcBtnC').on('click', function() {
                    $('#calcNumClear').val('')

                })
              })
            })
