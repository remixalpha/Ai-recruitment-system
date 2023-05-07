import JobModel from "../models/jobModel";

export const createData = async (req, res, next) => {
  try {
    console.log({ req: req.body });
    if (!req.file) {
      console.log("job create without image");
      let doc = await new JobModel(req.body).save();
      res.status(201).json({ status: true, doNotTrack: doc });
    } else {
      console.log(req.file);
      req.body.Image = req.file.path;
      let doc = await new JobModel(req.body).save();
      res.status(201).json({ status: true, doNotTrack: doc });
    }
  } catch (error) {
    res.status(500).json({ status: false, msg: "catch err" });
  }
};
// get sort
export const getData = async (req, res, next) => {
  try {
    let doc = await JobModel.find(req.body);
    res.status(200).json({ status: true, doc: doc });
  } catch (err) {
    next(err);
  }
};
