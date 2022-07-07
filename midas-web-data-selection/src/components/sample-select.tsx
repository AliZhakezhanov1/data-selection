// import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox, ListItemText, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/lab";
import { faker } from "@faker-js/faker";
import { makeStyles } from "@mui/styles";
import { useState, useCallback } from "react";
const useStyles = makeStyles({
  input: {
    color: "white",
  },
});
type SelectProps = {
  page: string;
};
export default function SampleSelect({ page }: SelectProps) {
  const [industry, setIndustry] = useState<string[]>([]);
  const [publication, setPublication] = useState<string[]>([]);
  const [company, setCompany] = useState<string[]>([]);
  const [group, setGroup] = useState<string | null>();
  const [document, setDocument] = useState<string | null>();
  const [topic, setTopic] = useState<string[]>([]);
  const [fromDate, setFromDate] = useState<Date | null>(new Date("2022-01-12T21:11:54"));
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const classes = useStyles();

  const selectIndustry = useCallback(() => {
    const handleIndustryChange = (event: SelectChangeEvent<typeof industry>) => {
      const {
        target: { value },
      } = event;
      setIndustry(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    return (
      <FormControl sx={{ m: 0.5, width: 150 }}>
        <InputLabel id="input-industry">Industries</InputLabel>
        <Select
          labelId="industries"
          id="select-industry"
          multiple={page === "entity-analysis" ? false : true}
          required={page === "entity-analysis" ? true : false}
          value={industry}
          color="warning"
          onChange={handleIndustryChange}
          input={<OutlinedInput label="industry" />}
          renderValue={(selected) => <p style={{ color: "white" }}>{selected.join(", ")}</p>}
          // MenuProps={MenuProps}
        >
          {industries.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }, [page, industry]);

  const selectPublication = useCallback(() => {
    const handlePublicationChange = (event: SelectChangeEvent<typeof publication>) => {
      const {
        target: { value },
      } = event;
      setPublication(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    return (
      <FormControl sx={{ m: 0.5, width: 150 }}>
        <InputLabel id="input-publication">Publications</InputLabel>
        <Select
          labelId="publication"
          id="select-publication"
          multiple={page === "entity-analysis" ? false : true}
          required={page === "entity-analysis" ? true : false}
          value={publication}
          color="warning"
          onChange={handlePublicationChange}
          input={<OutlinedInput label="publication" />}
          renderValue={(selected) => <p style={{ color: "white" }}>{selected.join(", ")}</p>}
          // MenuProps={MenuProps}
        >
          {publications.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }, [publication, page]);
  const selectDocument = useCallback(() => {
    const handleDocumentChange = (event: SelectChangeEvent<typeof document>) => {
      setDocument(event.target.value);
    };
    return (
      <FormControl sx={{ m: 0.5, width: 150 }}>
        <InputLabel id="input-document">Document</InputLabel>
        <Select
          labelId="document"
          id="select-document"
          required
          value={document}
          color="warning"
          onChange={handleDocumentChange}
          input={<OutlinedInput label="document" />}
          renderValue={(selected) => <p style={{ color: "white" }}>{selected}</p>}
        >
          {documents.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }, [document]);
  const selectGroup = useCallback(() => {
    const handleGroupChange = (event: SelectChangeEvent<typeof group>) => {
      setGroup(event.target.value);
    };
    return (
      <FormControl sx={{ m: 0.5, width: 150 }}>
        <InputLabel id="input-group">Groupby</InputLabel>
        <Select
          labelId="group"
          id="select-group"
          required
          value={group}
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

  const selectDate = useCallback(() => {
    const handleFromDateChange = (newValue: Date | null) => {
      setFromDate(newValue);
    };
    const handleToDateChange = (newValue: Date | null) => {
      setToDate(newValue);
    };
    return (
      <>
        <FormControl sx={{ m: 0.5, width: 150 }}>
          <DesktopDatePicker
            label="From Date"
            inputFormat="MM/dd/yyyy"
            value={fromDate}
            onChange={handleFromDateChange}
            renderInput={(params) => (
              <TextField {...params} fullWidth color="warning" id="from-date" />
            )}
          />
        </FormControl>{" "}
        <FormControl sx={{ m: 0.5, width: 150 }}>
          <DesktopDatePicker
            label="To Date"
            inputFormat="MM/dd/yyyy"
            value={toDate}
            onChange={handleToDateChange}
            renderInput={(params) => (
              <TextField {...params} fullWidth color="warning" id="to-date" />
            )}
          />
        </FormControl>
      </>
    );
  }, [fromDate, toDate]);
  const selectCompany = useCallback(() => {
    const handleCompanyChange = (event: SelectChangeEvent<typeof company>) => {
      const {
        target: { value },
      } = event;
      setCompany(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    return (
      <FormControl sx={{ m: 0.5, width: 150 }}>
        <InputLabel id="input-company">Companies</InputLabel>
        <Select
          labelId="company"
          id="select-company"
          required
          value={company}
          color="warning"
          onChange={handleCompanyChange}
          input={<OutlinedInput label="company" />}
          renderValue={(selected) => <p style={{ color: "white" }}>{selected}</p>}
        >
          {companies.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }, [company]);
  const selectTopic = useCallback(() => {
    const handleTopicChange = (event: SelectChangeEvent<typeof topic>) => {
      const {
        target: { value },
      } = event;
      setTopic(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    return (
      <FormControl sx={{ m: 0.5, width: 150 }}>
        <InputLabel id="input-topic">Topics</InputLabel>
        <Select
          labelId="topic"
          id="select-topic"
          multiple
          value={topic}
          color="warning"
          onChange={handleTopicChange}
          input={<OutlinedInput label="topic" />}
          renderValue={(selected) => <p style={{ color: "white" }}>{selected.join(", ")}</p>}
        >
          {topics.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }, [topic]);

  const companyOverview = useCallback(() => {
    return (
      <>
        {page === "company-overview" && (
          <>
            {selectIndustry()}
            {selectCompany()}
          </>
        )}
      </>
    );
  }, [page, selectCompany, selectIndustry]);
  const documentOverview = useCallback(() => {
    return (
      <>
        {page === "document" && (
          <>
            {selectDate()}
            {selectGroup()}
            {group === "industries" && <>{selectIndustry()}</>}
            {group === "publications" && <>{selectPublication()}</>}
            {group === "topics" && <>{selectTopic()}</>}
            {selectDocument()}
          </>
        )}
      </>
    );
  }, [
    group,
    page,
    selectDate,
    selectGroup,
    selectDocument,
    selectIndustry,
    selectPublication,
    selectTopic,
  ]);
  return (
    <>
      {companyOverview()}
      {documentOverview()}
    </>
  );
}
const industries = [
  "Catering",
  "Financial",
  "Autmotive",
  "Consumer goods",
  "Manufacturing",
  "Entertainment",
  "Bradley Wilkerson",
  "Technology",
];
//change publication after select industries
const publications = ["SCMP", "Financial Times", "BBC", "Vanity Fair"];
const companies = [
  faker.company.companyName(),
  faker.company.companyName(),
  faker.company.companyName(),
  faker.company.companyName(),
  faker.company.companyName(),
];
const documents = [
  "Wealthy Chinese feast on HK luxury goods",
  "Expedia stops American Airlines ticket sales",
  "Tablets set to steal the show at CES",
  "Luxury goods stores flock to Manchester",
  "Sara Lee offloads Kiwi polish unit for €245m",
  "Asia: the rise of the middle class",
  "Fashion's Hot Prospect for 2011",
  "China travel group pulls out of Aim",
];
const groups = ["publications", "industries", "topics", "positive", "negative"];

const topics = ["luxury", "travel", "technology", "finance", "sports"];
