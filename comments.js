const _ALLOW_COMMENT = 0; // disable or enable comments

comments = [':)','^^','good','great'];
			'^^'
			];
			
function getComment(){

	if(_ALLOW_COMMENT !=1 )  { return ''; }
	var i = Math.floor(Math.random() * comments.length);
	return comments[i];
}	