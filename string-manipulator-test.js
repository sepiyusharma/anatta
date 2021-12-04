import { expect } from 'chai';
import StringManipulator from './string-manipulator.js'
describe('word counter',()=>{
    const stringManipulatorInstance = new StringManipulator();
    it('should return 0 if empty html content is sent',()=>{
        const htmlContent = ''
        const findWordOccurence = 'test'
        const numberOfOccurence = stringManipulatorInstance.getNumberOfOccurence(htmlContent,findWordOccurence);
        expect(numberOfOccurence).to.be.equals(0)
    });
    it('should return 0 if the htmlContent does not have the word',()=>{
        const htmlContent = 'Hi, this is a test string'
        const findWordOccurence = 'ninja'
        const numberOfOccurence = stringManipulatorInstance.getNumberOfOccurence(htmlContent,findWordOccurence);
        expect(numberOfOccurence).to.be.equals(0)
    });
    it('should return the number of time a word occurs in html content',()=>{
        const htmlContent = 'test a test test a test. Test a test testing tests'
        const findWordOccurence = 'test'
        const numberOfOccurence = stringManipulatorInstance.getNumberOfOccurence(htmlContent,findWordOccurence);
        expect(numberOfOccurence).to.be.equals(6)
    })
})