import data from '../../assets/data/index.json';

export default (req, res) => {
  res.status(200).json(data);
};
