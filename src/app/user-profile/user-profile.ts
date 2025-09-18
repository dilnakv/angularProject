import { Component, QueryList, ViewChildren } from '@angular/core';
import { Skill } from './skill/skill';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
    skills: string[] = ['React', 'Angular', 'Python', 'Java', 'Node.js'];
  selectedSkills: string[] = [];

  @ViewChildren(Skill) Skill!: QueryList<Skill>;

  showSkills() {
    this.selectedSkills = this.Skill
      .filter((comp) => comp.isSelected)
      .map((comp) => comp.skillName);
  }
}
