`13.0.0 Darwin Kernel Version 13.0.0: Thu Sep 19 22:22:27 PDT 2013; root:xnu-2422.1.72~6/RELEASE_X86_64 x86_64`

<table>

  <thead>
    <th>ruby</th>
    <th>sinatra+thin</th>
    <th>sinatra+puma</th>
    <th>angelo</th>
    <th>reel</th>
    <th>notes</th>
  </thead>

  <tbody>
    <tr>
      <td>ruby 1.9.3p448 (2013-06-27 revision 41675) [x86_64-darwin12.5.0]</td>
      <td>1785.94</td>
      <td>1608.69</td>
      <td>2697.65</td>
      <td>3152.99</td>
      <td></td>
    </tr>
    <tr>
      <td>ruby 2.0.0p247 (2013-06-27 revision 41674) [x86_64-darwin12.5.0]</td>
      <td>1596.93</td>
      <td>1533.98</td>
      <td>2057.45</td>
      <td>2216.98</td>
      <td></td>
    </tr>
    <tr>
      <td>rubinius 2.0.0n288 (2.1.0 7b3a6aa9 2013-10-15 JI) [x86_64-darwin12.5.0]</td>
      <td>1182.41*</td>
      <td>2342.17</td>
      <td>1620.8</td>
      <td>1757.87**</td>
      <td>
        * ran many times, usually got "CRASH: A fatal error has occurred." midway through the test.<br/>
        ** had to -c 50 to not get "ArgumentError: Data object has already been freed"
      </td>
    </tr>
    <tr>
      <td>jruby 1.7.5 (1.9.3p392) 2013-10-15 @jruby.revision@ on Java HotSpot(TM) 64-Bit Server VM 1.7.0_45-b18 [darwin-x86_64]</td>
      <td>thin does not install</td>
      <td>3966.08</td>
      <td>631.09</td>
      <td>964.15</td>
      <td>had to turn -c down to 50 for jruby?</td>
    </tr>
  </tbody>

</table>

<table>
  <thead>
    <th>node.js</th>
    <th></th>
  </thead>
  <tbody>
    <td>v0.10.20</td>
    <td>5573.79</td>
  </tbody>
</table>
