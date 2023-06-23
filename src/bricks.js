export const bricks = {
    components: {
        CounterAppBrick: {
            CounterBtns: [
                    '+', 'Reset', '-',
            ],
            CounterObj: {
                counter1: 10,
                counter2: 20,
                counter3: 30,
                counter4: 40,
                counter5: 50,
            }
        },
        CustomForm: {
            formValuesBrick: {
                name: '',
                email: '',
                password: '',
            },
            formInputsBrick: [
                {   type: 'text',
                    name: 'name',
                    autoComplete: 'off',
                    placeholder: 'Su nombre',
                },
                {
                    type: 'email',
                    name: 'email',
                    autoComplete: 'off',
                    placeholder: 'Su email',
                },
                {
                    type: 'password',
                    name: 'password',
                    autoComplete: 'off',
                    placeholder: 'Contraseña',
                },
            ],
        }  
    },
};
