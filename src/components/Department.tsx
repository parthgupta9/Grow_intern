import { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Checkbox } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const data = [
  {
    "department": "HR",
    "sub_departments": ["Payroll", "Recruitment"]
  },
  {
    "department": "Engineering",
    "sub_departments": ["Development", "QA"]
  }
];

const DepartmentComponent = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (department: string) => {
    setOpen(prevOpen => ({ ...prevOpen, [department]: !prevOpen[department] }));
  };

  const handleSelect = (department: string, subDepartment?: string) => {
    if (subDepartment) {
      setSelected(prevSelected => ({
        ...prevSelected,
        [subDepartment]: !prevSelected[subDepartment]
      }));
    } else {
      const subDepartments = data.find(d => d.department === department)?.sub_departments || [];
      const newSelected = { ...selected };
      subDepartments.forEach(sd => {
        newSelected[sd] = !selected[department];
      });
      newSelected[department] = !selected[department];
      setSelected(newSelected);
    }
  };

  return (
    <List>
      {data.map(dept => (
        <div key={dept.department}>
          <ListItem button onClick={() => handleToggle(dept.department)}>
            <Checkbox
              edge="start"
              checked={!!selected[dept.department]}
              onChange={() => handleSelect(dept.department)}
            />
            <ListItemText primary={dept.department} />
            {open[dept.department] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[dept.department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map(subDept => (
                <ListItem key={subDept} button sx={{ pl: 4 }}>
                  <Checkbox
                    edge="start"
                    checked={!!selected[subDept]}
                    onChange={() => handleSelect(dept.department, subDept)}
                  />
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentComponent;
