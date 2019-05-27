import colors from 'colors';
import '../utils'

const logger = (req, res, next) => {
  console.log(colors.verbose("Logging......"));
  next();
};

export default logger;
