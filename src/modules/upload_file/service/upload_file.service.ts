import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import {PythonShell} from 'python-shell';

@Injectable()
export class UploadFileService {

    async callPythonProcess(filename:string){
        await PythonShell.run(
            'C:/Users/edgar/Desktop/globant_proyect_tech_interview/spark_process/globant_spark_process/spark_process.py',
             {args: [filename]}
             ).then(messages=>{
            console.log('finished');
          }).catch(error=>{
              console.log(error)
          })

    }
    
}
