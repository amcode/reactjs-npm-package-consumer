import React from 'react';

import * as nps from 'npm-package-shell';
import * as npst from 'npm-package-shell-typescript';
import * as npstn from 'npm-package-shell-typescript-namespaces';

class PrinterConsumerComponent extends React.Component {

    usePackages() {
        console.log('usePackages being called');
        nps.printMsg();
        npst.printMsg();
        console.log("how do I use npstn?");
        npstn.PrinterJob.prototype.sendPrintJob("This is how you do it!");
        console.log("like that!");
    }

  render() {
    {this.usePackages();}
    return (
      <div>
          <p>Check the console for logs</p>
      </div>
    );
  }

}

export default PrinterConsumerComponent;