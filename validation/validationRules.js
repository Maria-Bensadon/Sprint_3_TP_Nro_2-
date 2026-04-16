
/** 
    Paso 9 -  Validaciones
*/

import { body } from 'express-validator';


export const validarHeroe = () => [

    /**
        nombreSuperheroe debe validarse que sea requerido, 
        no tenga espacios en blanco(trim), una longitud 
        minima de 3 caracteres y una longitud maxima de 60
 */
    body('nombreSuperheroe')
        .notEmpty().withMessage('El superheroe debe tener un nombre')
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('El nombre debe tener entre 3 y 60 caracteres'),

    /*
        nombreReal debe validarse que sea requerido, 
        no tenga espacios en blanco(trim), una longitud 
        minima de 3 caracteres y una longitud maxima de 60
    */
    body('nombreReal')
        .notEmpty().withMessage('El nombre real es necesario')
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('El nombre debe tener entre 3 y 60 caracteres'),

    /**
        edad debe validarse que sea requerido, que sea un
        numero, no tenga espacios en blanco(trim), valor 
        minimo 0 (no admite edad negativa)
     */
    body('edad')
        .notEmpty().withMessage('Debe indicar la edad del superheroe')
        .trim()
        .isInt({ min: 0 }).withMessage('La edad no puede ser negativa'),

    /*
        poderes debe validarse que sea requerido, que sea un array de 
        string cuyo tamaño no sea 0, cada elemento no tenga espacios 
        en blanco, cada elemento una longitud minima de 3 caracteres 
        y una longitud maxima de 60
    */
    // se aplica a todo el array
    body('poderes')
        .isArray({ min: 1 }).withMessage('El array debe ser mayor a cero'),

    // valida cada elemento del array
    body('poderes.*')
        .notEmpty().withMessage('El superheroe debe tener al menos 1 poder')
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener como minimo 3 letras')


]