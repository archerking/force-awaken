import { Component, OnInit, Input, Output} from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { GetDataService } from '../../services/get-data.service';
import { SetFormOptionsService } from '../../services/set-form-options.service';
import { EditUpdateManagerService } from '../../services/edit-update-manager.service';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent extends SetFormOptionsService implements OnInit {
  @Input() data:any = {};
  @Input() compref:any = {};
  /**
   * Instantiating form with no form controls, again resetting it below.
   * 
   * @type {FormGroup}
   * @memberof EditPeopleComponent
   */
  form:FormGroup = new FormGroup({});

  private fieldLabelsMap:any = {
    'name':'Name',
    'birth_year': 'Birth Year',
    'gender': 'Gender',
    'eye_color': 'Eye Color',
    'hair_color': 'Hair Color',
    'skin_color': 'Skin Color',
    'height': 'Height'
  };

  constructor(
    private getData: GetDataService,
    private editUpdateManager: EditUpdateManagerService
  ) {
    super();    
  }

  ngOnInit() {
    this.getData.resolvePerson(parseInt(this.editUpdateManager.editPeople)).then(res=>{
      
      /**
       * Setting form control options
       */
      for(let i in this.fieldLabelsMap){
        let fieldOptions:any = {};

        fieldOptions['key'] = i;
        fieldOptions['name'] = i;
        fieldOptions['value'] = res[i];
        fieldOptions['label'] = this.fieldLabelsMap[i];
        this.formOptions.push(fieldOptions);
      }

      /**
       * Adding form controls to form group.
       */
      this.form.controls = this.setOptions(this.formOptions);
      //console.log(this.form);
    });  
  }

  closeModal(){
    /**
     * Destroy component on close model.
     */
    this.compref.destroy();
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
