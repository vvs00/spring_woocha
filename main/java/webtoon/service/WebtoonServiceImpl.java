package webtoon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import webtoon.bean.WebtoonDTO;
import webtoon.dao.WebtoonDAO;


@Service
public class WebtoonServiceImpl implements WebtoonService {
	
	@Autowired
	private WebtoonDAO webtoonDAO;
	
	@Override
	public List<WebtoonDTO> getExclusive() {
		
		return webtoonDAO.getExclusive();
	}

}
