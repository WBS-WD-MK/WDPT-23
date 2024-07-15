<p><strong>Objective:</strong> Use <code>setInterval</code> to schedule a fetch request to the Pok&eacute;mon API and increment a counter. For every request, output an object with the name of the Pok&eacute;mon and its ID.</p>
<p><strong>Instructions:</strong></p>
<ul>
<li>Create a variable <code>counter</code> and set it to 1.</li>
<li>Use <code>setInterval</code> to schedule a fetch request to the Pok&eacute;mon API every second.</li>
<li>The fetch request URL should be <code>https://pokeapi.co/api/v2/pokemon/</code> followed by the current value of <code>counter</code>.</li>
<li>Fetch the data and extract the Pok&eacute;mon's name and ID.</li>
<li>Output an object with the Pok&eacute;mon's name and ID to the console.</li>
<li>Increment the counter after each fetch request.</li>
<li>Stop the interval after 150 requests. We only want the OG Pok&eacute;mon! :D</li>
</ul>