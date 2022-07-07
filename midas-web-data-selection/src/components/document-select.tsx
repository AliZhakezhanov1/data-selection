import {
  Button,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState, useCallback } from "react";
import { faker } from "@faker-js/faker";
import mark from 'mark.js'
type propTypes ={
  setTarget : Function
  target:string[]
}
export const DocumentSelect = ({setTarget,target}:propTypes) => {
  const [group, setGroup] = useState<string | null>();
  const [emotion, setEmotion] = useState<string | null>();
  const [entity, setEntity] = useState<string | null>();
  const [aspect, setAspect] = useState<string | null>();
  const selectGroup = useCallback(() => {
    const handleGroupChange = (event: SelectChangeEvent<typeof group>) => {
      setGroup(event.target.value);
    };
    return (
      <FormControl sx={{ m: 0.5, width: 150 }}>
        <InputLabel id="input-document-group">GroupBy</InputLabel>
        <Select
          labelId="group"
          id="select-group"
          value={group}
          required
          color="warning"
          onChange={handleGroupChange}
          input={<OutlinedInput label="group" />}
          renderValue={(selected) => <p style={{ color: "white" }}>{selected}</p>}
        >
          {groups.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }, [group]);

const handleTargetChange = async() =>{
  if (typeof window !== "undefined") {
    var context = document.querySelector("#context");
    var instance = new mark(context);
    await instance.unmark(target);      
    setTarget(['As'])
  }
}

  const selectEmotion = useCallback(() => {
    const handleEmotionChange = (event: SelectChangeEvent<typeof emotion>) => {
      setEmotion(event.target.value);
    };
    return (
      <>
        {group === "emotions" && (
          <FormControl sx={{ m: 0.5, width: 150 }}>
            <InputLabel id="input-document-group">Emotion</InputLabel>
            <Select
              labelId="emotions"
              id="select-emotions"
              value={emotion}
              required
              color="warning"
              onChange={handleEmotionChange}
              input={<OutlinedInput label="emotion" />}
              renderValue={(selected) => <p style={{ color: "white" }}>{selected}</p>}
            >
              {emotions.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </>
    );
  }, [group, emotion]);

  const selectEntity = useCallback(() => {
    const handleEntityChange = (event: SelectChangeEvent<typeof entity>) => {
      setEntity(event.target.value);
    };
    return (
      <>
        {group === "entities" && (
          <FormControl sx={{ m: 0.5, width: 150 }}>
            <InputLabel id="input-document-group">Entities</InputLabel>
            <Select
              labelId="entities"
              id="select-entities"
              value={entity}
              required
              color="warning"
              onChange={handleEntityChange}
              input={<OutlinedInput label="entity" />}
              renderValue={(selected) => <p style={{ color: "white" }}>{selected}</p>}
            >
              {entities.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </>
    );
  }, [group, entity]);

  return (
    <>
      {selectGroup()}
      {selectEmotion()}
      {selectEntity()}
      <Button variant="outlined" color='warning' onClick={handleTargetChange}>Search</Button>
    </>
  );
};

const groups = ["emotions", "entities", "aspects", "positive", "negative"];
const emotions = ["happy", "sad", "anger", "surprise", "anticipation"];
const entities = [
  faker.company.companyName(),
  faker.company.companyName(),
  faker.company.companyName(),
  faker.company.companyName(),
  faker.company.companyName(),
];
