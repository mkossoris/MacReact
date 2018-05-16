import React, { Component } from 'react';
import DockIcon from './DockIcon'
import '../css/dock.css'

class Dock extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='dock'>
        <DockIcon addApplication={this.props.addApplication} appName='Finder' imageIcon='http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/finder-icon.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Siri' imageIcon='https://9to5mac.files.wordpress.com/2016/06/siri1.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Safari' imageIcon='http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/safari-icon.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Mail' imageIcon='http://media.idownloadblog.com/wp-content/uploads/2016/09/Mail-App-JPG-Icon-768x768.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Contacts' imageIcon='http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/contacts-icon.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Calendar' imageIcon='http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/calendar-icon.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Notes' imageIcon='http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/notes-icon.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Reminders' imageIcon='http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/reminders-icon.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Maps' imageIcon='https://9to5mac.files.wordpress.com/2013/11/maps_image1.png?w=2500&h=1000#038;h=358' />
        <DockIcon addApplication={this.props.addApplication} appName='Photos' imageIcon='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac_apps/iphoto/osx-elcapitan-photos-icon.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Messages' imageIcon='https://i2.wp.com/christianboyce.com/wp-content/uploads/2016/07/Messages256.png?w=256' />
        <DockIcon addApplication={this.props.addApplication} appName='FaceTime' imageIcon='https://fthmb.tqn.com/NJSWNpa289mk2MxUPhJJyEh60Bc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FaceTime_Yosemite.svg1-5aee07a343a103003652c781.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Pages' imageIcon='https://dl2.macupdate.com/images/icons256/17494.png?d=1525709909' />
        <DockIcon addApplication={this.props.addApplication} appName='Numbers' imageIcon='https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/2f/14/b9/2f14b956-f295-32b6-18de-d4878e98e48d/AppIcon-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0.png/690x0w.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Keynote' imageIcon='https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/e5/04/13/e5041359-8818-2139-c930-f696a38d30fd/AppIcon-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0.png/690x0w.png' />
        <DockIcon addApplication={this.props.addApplication} appName='iTunes' imageIcon='https://png.icons8.com/color/1600/itunes.png' />
        <DockIcon addApplication={this.props.addApplication} appName='iBooks' imageIcon='http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/ibooks-icon.png' />
        <DockIcon addApplication={this.props.addApplication} appName='App Store' imageIcon='https://www.gadgetdaily.xyz/wp-content/uploads/2013/08/App-Store2-3.png' />
        <DockIcon addApplication={this.props.addApplication} appName='Preferences' imageIcon='http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/system-preferences-icon.png' />
      </div>
    );
  }
}

export default Dock;