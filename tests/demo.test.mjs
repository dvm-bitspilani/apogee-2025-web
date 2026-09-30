import { test } from 'node:test';
import assert from 'node:assert/strict';
import { questions,scoreQuiz,previewRegistration,sampleVisitor } from '../src/portfolio/demo.js';
test('quiz scores correct, incorrect and skipped answers without persistence',()=>{
 assert.deepEqual(scoreQuiz([]),{correct:0,attempted:0,total:5,score:0});
 assert.equal(scoreQuiz(questions.map(q=>({question_id:q.id,option_id:q.correct}))).score,5);
 assert.equal(scoreQuiz([{question_id:1,option_id:questions[0].correct},{question_id:2,option_id:99}]).score,0);
});
test('registration preview returns an explicitly local result without echoing personal data',async()=>{
 const result=await previewRegistration({name:'Private input',phone:'123'});
 assert.match(result.message,/Demo/);assert.doesNotMatch(JSON.stringify(result),/Private input|123/);assert.equal(sampleVisitor.email,'visitor@example.com');
});

test('quiz results can be reset entirely in memory',async()=>{
 const { rememberQuizResult,readQuizResult,clearQuizResult } = await import('../src/portfolio/demo.js');
 clearQuizResult();assert.equal(readQuizResult(),null);
 rememberQuizResult([{question_id:1,option_id:questions[0].correct}]);assert.equal(readQuizResult().correct,1);
 clearQuizResult();assert.equal(readQuizResult(),null);
});
